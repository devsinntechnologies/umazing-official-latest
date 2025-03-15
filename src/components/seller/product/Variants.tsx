"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllAttributesQuery } from "@/hooks/UseAttributes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";

const Variants = () => {
  const { data: attributesData, isError: isErrorAttributes, isLoading: isLoadingAttributes } = useGetAllAttributesQuery();
  const router = useRouter();

  const [showVariants, setShowVariants] = useState(false);
  const [attributes, setAttributes] = useState([{ attribute: "", attributeName: "", attributeValues: [] }]);
  const [variants, setVariants] = useState([]);
  const [isAttrTable, setIsAttrTable] = useState(false);

  const generateVariants = () => {
    if (!attributes.every(attr => attr.attribute && attr.attributeValues.length > 0)) return;
    
    const attributeValueCombinations = cartesian(attributes.map(attr => attr.attributeValues));
    const newVariants = attributeValueCombinations.map(combination => ({
      sku: `Product-${combination.map(value => value.name).join('-')}`,
      quantity: 1,
      price: "",
      attributes: attributes.map((attr, index) => ({
        AttributeId: attr.attribute,
        AttributeValueId: attr.attributeValues[index]?.id,
      })),
    }));

    setVariants(newVariants);
  };

  const cartesian = (arrays) => arrays.reduce((acc, curr) => acc.flatMap(x => curr.map(y => x.concat(y))), [[]]);

  useEffect(() => {
    generateVariants();
    setIsAttrTable(false);
  }, [attributes]);

  const handleAddAttribute = () => {
    setAttributes(prev => [...prev, { attribute: "", attributeName: "", attributeValues: [] }]);
  };

  const handleRemoveAttribute = (index) => {
    if (attributes.length > 1) {
      setAttributes(prev => prev.filter((_, idx) => idx !== index));
    }
  };

  const handleAttributeChange = (index, key, value, name) => {
    setAttributes(prev => prev.map((attrib, idx) => idx === index ? { ...attrib, [key]: value, [`${key}Name`]: name } : attrib));
  };

  const handleAddAttributeValue = (index, valueId, valueName) => {
    setAttributes(prev => prev.map((attrib, idx) => idx === index ? { ...attrib, attributeValues: [...attrib.attributeValues, { id: valueId, name: valueName }] } : attrib));
  };

  const handleRemoveAttributeValue = (index, valueIndex) => {
    setAttributes(prev => prev.map((attrib, idx) => idx === index ? { ...attrib, attributeValues: attrib.attributeValues.filter((_, i) => i !== valueIndex) } : attrib));
  };

  const getAttributeValues = (attributeId) => {
    if (!attributesData?.data) return [];
    return attributesData.data.find(attr => attr.id === attributeId)?.Attribute_Values || [];
  };

  if (isLoadingAttributes) return <div>Loading attributes...</div>;
  if (isErrorAttributes) return <div>Error loading attributes.</div>;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Add Product Variants</h2>
      <button onClick={() => setShowVariants(!showVariants)} className="text-sm bg-primary text-white px-4 py-2 rounded-sm">
        {showVariants ? "Hide Variants" : "Add Variants"}
      </button>
      {showVariants && (
        <div>
          <h4 className="text-lg font-bold mb-2">Attributes</h4>
          {attributes.map((attr, index) => (
            <div key={index} className="mb-4 p-2 rounded-sm border border-solid-black">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="w-full h-10 rounded-sm mt-2 px-3 py-2 flex items-center justify-between cursor-pointer">
                    <div>{attr.attributeName || "Select Attribute"}</div>
                    <span>&#x25BC;</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {attributesData?.data.map(attribute => (
                    <DropdownMenuItem key={attribute.id} onClick={() => handleAttributeChange(index, "attribute", attribute.id, attribute.name)} disabled={attributes.some(a => a.attribute === attribute.id)}>
                      {attribute.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {index > 0 && <button onClick={() => handleRemoveAttribute(index)} className="ml-2 text-destructive"><X size={20} /></button>}
            </div>
          ))}
          <button onClick={handleAddAttribute} className="my-4 px-4 py-2 rounded-sm text-sm bg-primary text-white">Add Attribute</button>
          <button onClick={() => setIsAttrTable(true)} className="mt-2 px-4 py-2 rounded-sm text-sm bg-primary text-white">Generate Variants</button>
        </div>
      )}
      {showVariants && isAttrTable && (
        <div>
          <h4 className="text-lg font-bold mb-2">Variants</h4>
          <Table>
            <TableCaption>A list of variants</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Sr</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock Quantity</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {variants.map((variant, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{variant.sku}</TableCell>
                  <TableCell>
                    <input type="text" value={variant.price} onChange={e => handleVariantPriceChange(index, e.target.value)} placeholder="Price" />
                  </TableCell>
                  <TableCell>
                    <input type="text" value={variant.stockQuantity} onChange={e => handleVariantStockChange(index, e.target.value)} placeholder="Stock Quantity" />
                  </TableCell>
                  <TableCell className="text-right">
                    <button onClick={() => handleDeleteVariant(index)}>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Variants;
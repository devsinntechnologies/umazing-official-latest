"use client";
import { CircleCheck } from "lucide-react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useChangePasswordMutation } from "@/hooks/UseAuth";
import { toast } from "sonner";

const Security = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleValidation = () => {
    if (!currentPassword) {
      toast.error("Please enter your current password");
      return false;
    }
    if (!newPassword) {
      toast.error("New password is required");
      return false;
    }
    if (!confirmPassword) {
      toast.error("Please confirm your new password");
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!handleValidation()) return;

    try {
      const response = await changePassword({ oldPassword: currentPassword, newPassword }).unwrap();
      
      if (response.success) {
        toast.success(response.message || "Password updated successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error(response.message || "Failed to update password. Please try again.");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update password. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Security Settings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[{
          label: "Current Password", value: currentPassword, setValue: setCurrentPassword, showPassword: showCurrentPassword, setShowPassword: setShowCurrentPassword
        }, {
          label: "New Password", value: newPassword, setValue: setNewPassword, showPassword: showNewPassword, setShowPassword: setShowNewPassword
        }, {
          label: "Confirm New Password", value: confirmPassword, setValue: setConfirmPassword, showPassword: showConfirmPassword, setShowPassword: setShowConfirmPassword
        }].map(({ label, value, setValue, showPassword, setShowPassword }, index) => (
          <div key={index} className="min-w-[250px] relative">
            <label className="block text-base font-semibold text-gray-700 mb-2">{label}</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder={`Enter ${label.toLowerCase()}`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 text-gray-500"
            >
              {showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
            </button>
          </div>
        ))}
      </div>
      <div className="space-y-2 text-sm text-gray-700">
        {["Password must be at least 8 characters long", "Include at least one uppercase letter, one lowercase letter, and one number", "Include at least one special character (!@#$%^&*)"].map((text, index) => (
          <p key={index} className="flex items-center">
            <span className="mr-2 text-primary"><CircleCheck /></span>
            {text}
          </p>
        ))}
      </div>
      <button 
        className="mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 cursor-pointer" 
        onClick={handleSubmit} 
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Update Password"}
      </button>
    </div>
  );
};

export default Security;

import { Star } from 'lucide-react'

const Stars = ({rating}: {rating: number}) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({length: 5}).map((_, index) => {
        const isFullStar = index < Math.floor(rating);
        const partialFill = rating - Math.floor(rating);
        const isPartialStar = index === Math.floor(rating);
        
        return (
          <Star 
            key={index} 
            color="#FBBF24"
            fill={isFullStar ? "#FBBF24" : isPartialStar ? `url(#partial-fill-${Math.round(partialFill * 100)})` : "none"} 
            className='size-3 md:size-4'
          >
            {/* Add definition for partial-fill gradients */}
            {index === 0 && (
              <defs>
                {/* Create gradients for each 10% increment */}
                {Array.from({length: 10}).map((_, i) => {
                  const percentage = (i + 1) * 10;
                  return (
                    <linearGradient 
                      key={percentage}
                      id={`partial-fill-${percentage}`} 
                      x1="0" 
                      x2="100%" 
                      y1="0" 
                      y2="0"
                    >
                      <stop offset={`${percentage}%`} stopColor="#FBBF24" />
                      <stop offset={`${percentage}%`} stopColor="white" />
                    </linearGradient>
                  );
                })}
              </defs>
            )}
          </Star>
        )
      })}
    </div>
  )
}

export default Stars
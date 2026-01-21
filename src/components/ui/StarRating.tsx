import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showRating?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showRating = true
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const Star = ({ type }: { type: 'full' | 'half' | 'empty' }) => (
    <svg
      className={`${sizeClasses[size]} ${type === 'empty' ? 'text-gray-300' : 'text-yellow-400'}`}
      fill={type === 'empty' ? 'none' : 'currentColor'}
      viewBox="0 0 24 24"
      stroke={type === 'empty' ? 'currentColor' : 'none'}
    >
      {type === 'half' ? (
        <>
          <defs>
            <linearGradient id={`half-star-${rating}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-star-${rating})`}
            stroke="currentColor"
            strokeWidth="1"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </>
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={type === 'empty' ? 1 : 0}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      )}
    </svg>
  );

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} type="full" />
        ))}
        {hasHalfStar && <Star type="half" />}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} type="empty" />
        ))}
      </div>
      {showRating && (
        <span className="text-sm text-gray-600 ml-1">
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
};
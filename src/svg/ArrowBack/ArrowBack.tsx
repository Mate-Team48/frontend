import './ArrowBack.scss';
import cn from "classnames";

interface Props {
  currentPage?: number;
  classNames?: string;
}

export const ArrowBack: React.FC<Props> = ({ currentPage, classNames }) => {
  const className = cn(
    classNames,
  );

  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={cn({'pagination-item--disabled': currentPage === 1})} 
        d="M6.36647 8.00002L11.2665 12.9C11.4331 13.0667 11.5138 13.2611 11.5085 13.4834C11.5031 13.7056 11.4169 13.9 11.2498 14.0667C11.0831 14.2334 10.8887 14.3167 10.6665 14.3167C10.4442 14.3167 10.2498 14.2334 10.0831 14.0667L4.9498 8.95002C4.81647 8.81669 4.71647 8.66669 4.6498 8.50002C4.58314 8.33335 4.5498 8.16669 4.5498 8.00002C4.5498 7.83335 4.58314 7.66669 4.6498 7.50002C4.71647 7.33335 4.81647 7.18335 4.9498 7.05002L10.0831 1.91669C10.2498 1.75002 10.4471 1.66935 10.6751 1.67469C10.9031 1.68002 11.1002 1.76624 11.2665 1.93335C11.4331 2.10002 11.5165 2.29446 11.5165 2.51669C11.5165 2.73891 11.4331 2.93335 11.2665 3.10002L6.36647 8.00002Z" 
        fill="#929497"
      />
    </svg>
  );
};
import { Button } from "../ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom";

type Props = {
  totalPages?: number;
  handlePaginate: (page: number) => void;
};

const MAX_BUTTONS = 3;

const PaginationController = ({ totalPages = 1, handlePaginate }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  if (totalPages <= 1) return null;

  const calculateMaxVisibleButtons = () => {
    let maxLeft = currentPage - Math.floor(MAX_BUTTONS / 2);
    let maxRight = currentPage + Math.floor(MAX_BUTTONS / 2);

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = Math.min(MAX_BUTTONS, totalPages);
    }

    if (maxRight > totalPages) {
      maxRight = totalPages;
      maxLeft = Math.max(1, totalPages - (MAX_BUTTONS - 1));
    }

    return { maxLeft, maxRight };
  };

  const { maxLeft, maxRight } = calculateMaxVisibleButtons();
  const pageNumbers = Array.from(
    { length: maxRight - maxLeft + 1 },
    (_, i) => maxLeft + i
  );

  const changePage = (page: number) => {
    setSearchParams({ page: page.toString() });
    handlePaginate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex items-center justify-center gap-2">
      <Button
        variant="white"
        onClick={() => changePage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </Button>

      {pageNumbers.map((pageNum) => (
        <Button
          key={pageNum}
          variant={currentPage === pageNum ? "red" : "link"}
          onClick={() => changePage(pageNum)}
        >
          {pageNum}
        </Button>
      ))}

      <Button
        variant="white"
        onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default PaginationController;

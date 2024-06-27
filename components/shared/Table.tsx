import DataTable, { createTheme, TableProps } from "react-data-table-component";
import If, { Else, Then } from "./if";
import { useTheme } from "next-themes";
import { Sort } from "iconsax-react";

interface Props {
  data: any[];
  columns: any[];
  resetPagination?: boolean;
  pagination?: boolean;
  isRecent?: boolean;
  emptyIcon?: string;
  emptyMessage?: string;
}

type TablePropsType = Props & TableProps<Props>;

// optional to override the default dark theme
createTheme(
  "solarized",
  {
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
    background: {
      default: "#1F2937",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const Table = ({
  data,
  columns,
  resetPagination,
  emptyIcon,
  emptyMessage,
  pagination = true,
  isRecent,
  defaultSortFieldId,
  defaultSortAsc = true,
}: TablePropsType) => {

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    // <div className={`overflow-hidden`${isRecent} ? " md:p-0" : "md:p-5"`}>
    <div className={`overflow-hidden ${isRecent ? " md:p-0" : "md:p-5"}`}>
      <If condition={data?.length > 0}>
        <Then>
          <DataTable
            data={data}
            theme={isDark ? "solarized" : "light"}
            columns={columns}
            fixedHeader
            fixedHeaderScrollHeight="72vh"
            pointerOnHover
            pagination={pagination}
            responsive
            paginationResetDefaultPage={resetPagination}
            paginationPerPage={30}
            defaultSortFieldId={defaultSortFieldId}
            defaultSortAsc={defaultSortAsc}
          />
        </Then>
        <Else>
          <div className="flex gap-5 p-5 mt-8 text-gray-500 flex-column align-items-center justify-center-center">
            <i className={`pi ${emptyIcon} text-5xl text-primary`} />
            <span className="text-lg">{emptyMessage}</span>
          </div>
        </Else>
      </If>
    </div>
  );
};

export default Table;

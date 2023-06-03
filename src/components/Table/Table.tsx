import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { campaignsDto } from '../../model/campaignsDto';
import { budgetFormatter } from '../../utils/budgetFormatter';
import { getCampaignStatus } from '../../utils/getCampaignStatus';
import './Table.scss';

type Props = {
  data: campaignsDto[] | [];
};
const Table = ({ data }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = useMemo<ColumnDef<campaignsDto>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
        footer: (props) => props.column.id,
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (info) => {
          const rowData = info.row.original;
          return getCampaignStatus(rowData);
        },
        enableSorting: true,
        sortingFn: (rowA, rowB) => {
          const valueA = getCampaignStatus(rowA.original);
          const valueB = getCampaignStatus(rowB.original);
          return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        },
      },
      {
        header: 'Start date',
        accessorKey: 'startDate',
      },
      {
        header: 'End date',
        accessorKey: 'endDate',
      },
      {
        header: 'Budget ',
        accessorKey: 'budget',

        cell: (info) => {
          const rowData = info.row.original.budget;
          return budgetFormatter('USD').format(rowData);
        },
      },
    ],
    []
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
  });
  return (
    <article className="table">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="pagination">
        <div className="pagination__buttons">
          <button
            className="pagination__first"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="pagination__previous"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="pagination__next"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="pagination__last"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
        </div>
        <span className="pagination__detail">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="pagination__select-page">
          Go to page:{' '}
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
      </div>
      {/* <div>{table.getRowModel().rows.length} Rows</div> */}

      {/* <pre>{JSON.stringify(sorting, null, 2)}</pre> */}
    </article>
  );
};

export default Table;

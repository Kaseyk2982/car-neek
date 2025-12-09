import { createContext, useContext } from "react";

const TableContext = createContext();

export default function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        className="border border-solid border-gray-200 text-2xl bg-gray-50 rounded-md overflow-hidden"
        role="table"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      role="row"
      as="header"
      className="grid py-6 gap-5 px-10 bg-gray-200 border-b border-solid border-b-gray-100 uppercase tracking-normal font-semibold text-gray-600"
      columns={columns}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className="py-4 px-10 grid items-center border-b border-gray-200 last:border-b-0"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  return <section className="my-3 mx-0">{data.map(render)}</section>;
}

function Footer({ children }) {
  if (!children) return null;

  return (
    <footer className="flex justify-center p-5 bg-gray-100">{children}</footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

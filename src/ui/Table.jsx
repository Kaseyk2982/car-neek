// import { createContext, useContext } from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";

// const TableContext = createContext();

// export default function Table({ children, columns }) {
//   return (
//     <TableContext.Provider value={{ columns }}>
//       <div
//         className="border border-solid border-gray-200 text-2xl bg-gray-50 rounded-md overflow-x-auto min-w-full"
//         role="table"
//       >
//         {children}
//       </div>
//     </TableContext.Provider>
//   );
// }

// function Header({ children }) {
//   const { columns } = useContext(TableContext);

//   return (
//     <div
//       role="row"
//       as="header"
//       className="grid py-6 gap-5 px-10 bg-gray-200 border-b border-solid border-b-gray-100 uppercase tracking-normal font-semibold text-gray-600"
//       columns={columns}
//       style={{ gridTemplateColumns: columns }}
//     >
//       {children}
//     </div>
//   );
// }

// function Row({ children }) {
//   const { columns } = useContext(TableContext);
//   return (
//     <div
//       role="row"
//       className="py-4 px-10 grid items-center border-b border-gray-200 last:border-b-0"
//       style={{ gridTemplateColumns: columns }}
//     >
//       {children}
//     </div>
//   );
// }

// function Body({ data, render }) {
//   return <section className="my-3 mx-0">{data.map(render)}</section>;
// }

// function Footer({ children }) {
//   if (!children) return null;

//   return (
//     <footer className="flex justify-center p-5 bg-gray-100">{children}</footer>
//   );
// }

// Table.Header = Header;
// Table.Row = Row;
// Table.Body = Body;
// Table.Footer = Footer;

const TableContext = createContext();

export default function Table({ children, columns }) {
  const [headers, setHeaders] = useState([]);
  return (
    <TableContext.Provider value={{ columns, headers, setHeaders }}>
      <div
        className="border border-solid border-gray-200 text-xl sm:text-2xl bg-gray-50 rounded-md overflow-x-auto min-w-full" // Horizontal scroll + min-width
        role="table"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns, setHeaders } = useContext(TableContext);

  useEffect(() => {
    // Extract header labels (text content); empty <div></div> will be ""
    const headerLabels = Children.map(
      children,
      (child) => child.props.children || ""
    );
    setHeaders(headerLabels);
  }, [children]);

  return (
    <div
      role="row"
      as="header"
      className="grid py-4 px-6 sm:py-6 sm:px-10 gap-3 sm:gap-5 bg-gray-200 border-b border-solid border-b-gray-100 uppercase tracking-tight sm:tracking-normal font-semibold text-gray-600 hidden sm:grid" // Hide on mobile (since labels move to rows), show grid on sm+
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns, headers } = useContext(TableContext);
  return (
    <div
      role="row"
      className="py-3 px-6 sm:py-4 sm:px-10 flex flex-col sm:grid items-start sm:items-center border-b border-gray-200 last:border-b-0 bg-white sm:bg-transparent rounded-md sm:rounded-none m-2 sm:m-0" // Vertical flex on mobile (card-like), grid on sm+
      style={{ gridTemplateColumns: columns }} // Applies only on sm+ implicitly via display
    >
      {Children.map(children, (child, index) => (
        <div
          key={index}
          role="cell"
          className="w-full mb-4 last:mb-0 sm:mb-0 sm:w-auto"
        >
          {headers[index] && ( // Only show label if header text exists (skips empty headers)
            <div className="font-bold text-gray-600 mb-1 block sm:hidden">
              {headers[index]}
            </div>
          )}
          {child}
        </div>
      ))}
    </div>
  );
}

function Body({ data, render }) {
  return <section className="my-3 mx-0">{data.map(render)}</section>;
}

function Footer({ children }) {
  if (!children) return null;

  return (
    <footer className="flex justify-center p-4 sm:p-5 bg-gray-100">
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => (
  <nav className="w-full hidden lg:flex breadcrumbs">
    <ol className="list-none">
      {items.map((item, i) => (
        <li className="truncate" key={i} title={item.title}>
          {!item.last && !item.home ? (
            <Link
              to={item.url}
              className={`text-sm ${
                i === items.length - 1 ? '' : 'font-bold text-blue-link'
              }`}
            >
              {item.title}
            </Link>
          ) : (
            item.title
          )}
          {!item.last && <span className="mx-1">/</span>}
        </li>
      ))}
    </ol>
  </nav>
);
Breadcrumb.propTypes = {
  home: PropTypes.bool,
  icon: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      home: PropTypes.bool,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      last: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default Breadcrumb;

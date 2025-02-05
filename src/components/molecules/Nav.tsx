import React from 'react';

const Nav: React.FC = () => {
  return (
    <div className="text-white bg-orange-500 navbar">
      <div className="flex-1">
        <a className="text-xl btn btn-ghost">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 rounded-t-none bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

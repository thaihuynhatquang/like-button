import React from "react";
import "./App.css";

/***
 * 1. Thêm button "Like button" vào component App.
 * - Nội dung của button like button có định dạng như sau: "Like | 100", trong đó 100 là tổng số lượt like.
 * - Button sẽ có class "like-button".
 * - Số lượt like ban đầu trong counter là 100.
 *
 * 2. Users có thể like bằng cách click vào button:
 * - Số lượt like sẽ tăng thêm 1
 * - Button like sẽ có class "liked" ngoài class "like-button" (có thể sử dụng classnames library để thực hiện điều này).
 * 
 * 3. Users có thể unlike bằng cách click vào button:
 * - Số lượt like sẽ giảm đi 1
 * - Button like sẽ không còn class "liked" nữa.
 */

function App() {
  return (
    <>
      <div>
        <h2>Like Button</h2>
      </div>
      <style>{`
          .like-button {
              font-size: 1rem;
              padding: 5px 10px;
              color:  #585858;
          }
          .liked {
              font-weight: bold;
              color: #1565c0;
          }
      `}</style>
    </>
  );
}

export default App;

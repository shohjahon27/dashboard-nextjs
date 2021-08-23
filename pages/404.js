import { useState } from "react"

const Page404 = () => {
    const [margin, setmargin] = useState(100)

    return (
      <div
        style={{
          margin: `${margin}px`,
        }}
      >
        <img
          src="https://livepage.pro/wp-content/uploads/2018/02/primer-404-stranicy-ot-google.png"
          alt=""
        />
      </div>
    );
}

export default Page404

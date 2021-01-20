import React from "react";

export function BasketTotalPrice(props) {
  const {total} = props;

  return (
    <div>
      Total: {total}
    </div>
  );
}

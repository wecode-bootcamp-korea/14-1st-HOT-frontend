export default function calcuration(targetList, saleRate, multiplication) {
  if (targetList.length) {
    return (
      targetList
        .map(
          (ele) =>
            (ele.options.reduce(
              (accumulator, currentValue) =>
                accumulator + parseInt(currentValue.price * currentValue.count),
              0
            ) /
              saleRate) *
            multiplication
        )
        .reduce((acc, val) => acc + val)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'
    );
  }
}

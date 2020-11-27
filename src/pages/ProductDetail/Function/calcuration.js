export default function calcuration(targetList, saleRate, multiplication) {
  if (targetList.length) {
    return (
      targetList
        .map(
          (ele) =>
            (ele.options.reduce(
              (accumulator, currentValue) =>
                accumulator + parseInt(currentValue.value * currentValue.count),
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

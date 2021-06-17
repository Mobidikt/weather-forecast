export {};
type Padding = {
  top: `${number}px`;
  right: `${number}px`;
  bottom: `${number}px`;
  left: `${number}px`;
};

function padding(): Padding;

function padding(padding: number): Padding;

function padding(paddingHorizontal: number, paddingVertical: number): Padding;

function padding(
  paddingTop: number,
  paddingHorizontal: number,
  paddingBottom: number,
): Padding;

function padding(
  paddingTop?: number,
  paddingBottom?: number,
  paddingRight?: number,
  paddingLeft?: number,
): Padding;

function padding(top?: number, right?: number, bottom?: number, left?: number) {
  return {
    top: `${top ?? 0}px`,
    right: `${right ?? top ?? 0}px`,
    bottom: `${bottom ?? top ?? 0}px`,
    left: `${left ?? right ?? top ?? 0}px`,
  };
}

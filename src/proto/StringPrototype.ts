// Extend the String interface
export {};

declare global {
  interface String {
    extraSlice(): string;
  }
}

// Implement the method
String.prototype.extraSlice = function (): string {
  let addingStr = '';
  for (let i = this.length - 2; i < this.length; i++) {
    addingStr += this[i];
  }
  return addingStr;
};

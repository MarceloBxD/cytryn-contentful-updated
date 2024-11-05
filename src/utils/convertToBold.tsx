export const convertToBold = (text: string) => {
    return text.split(/\*\*(.*?)\*\*/).map((part, i) =>
        i % 2 === 1 ? <b key={i}>{part}</b> : part 
      );
}
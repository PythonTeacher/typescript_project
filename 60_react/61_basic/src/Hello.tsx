function Hello() {
  const name = "홍길동";
  return (
    <>
      <div>안녕하세요, {name}님</div>
    </>
  );
}

// const Hello: React.FC = () => {
//   const name = "홍길동";
//   return (
//     <>
//       <div>안녕하세요, {name}님</div>
//     </>
//   );  
// }

export default Hello;
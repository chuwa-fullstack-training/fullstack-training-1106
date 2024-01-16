import DisplayBox from "./DisplayBox";
function DisplayPanel({updateName, pairs}){
    const renderedPanel = pairs.map((pair) =>{
        return <DisplayBox pair={pair} updateName={updateName} />;
    });
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', columnGap: '30px', rowGap:'20px'}}>
            {renderedPanel}
        </div>
    );
}

export default DisplayPanel;

//  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(4, 1fr)', columnGap: '12px'
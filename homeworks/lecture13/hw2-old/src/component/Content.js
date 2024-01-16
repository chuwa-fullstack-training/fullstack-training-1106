import AppButton from "./AppButton";
import './test.css'
const contentAppNums = 16;
const bottomBarNums = 4;

function Content({setCurAppId}){
    let renderedContent = [];
    for(let i=1; i<=contentAppNums; i++){
        renderedContent.push(
            < AppButton id={i} setCurAppId={setCurAppId} key={i}/>
        );
    }

    let renderedBottomBar = [];
    for(let i=contentAppNums + 1; i<=contentAppNums + bottomBarNums; i++){
        renderedBottomBar.push(
            < AppButton id={i} setCurAppId={setCurAppId} key={i}/>
        );
    }
    
   
    return (
        <div style={{height:'100%'}}>
            <div style={{height:'80%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(4, 1fr)', columnGap: '12px'}}>
            
                {renderedContent}
            </div>
            <div style={{height: '20%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(1, 1fr)', columnGap: '12px', backgroundColor:' rgba(128, 128, 128, 0.5)'}}>
            
            {renderedBottomBar}
        </div>
           
            
        </div>
        
        
        
    )
}

export default Content;
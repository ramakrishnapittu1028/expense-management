import AddButtonMenu from "../../common/addButton";

function Home() {
  return (
   <div className="home main-container">
    <h1 className="page-header">Home</h1>
    <AddButtonMenu />
    <div className="recent-expenses">
        <span className="title">Recent Expenses</span>
        <div className="list">
            
        </div>
    </div>
   </div>
  );
}

export default Home;

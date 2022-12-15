import './home-menu.css';

function HomeMenu() {

  return (
      <div id="main">
        <div className='home-icon'>
          <i className="fa-solid fa-house"></i>
        </div>

        <div className='sort-icon'>
        <i className="fa-regular fa-bars-sort"></i>
        </div>


        <div className='pencil-icon'>
        <i className="fa-solid fa-pencil"></i>
        </div>

        <div className='menu-icon'>
        <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>

  );
}

export default HomeMenu;

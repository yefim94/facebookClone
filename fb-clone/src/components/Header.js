import '../Header.css';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt="logo"
        />
        <div className="header__input">
         <i class="fas fa-search" style={{paddingRight: '10px'}}></i>
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
        <i class="fas fa-home"></i>
        </div>
        <div className="header__option">
        <i class="fas fa-flag"></i>
        </div>
        <div className="header__option">
        <i class="far fa-bell"></i>
        </div>
        <div className="header__option">
        <i class="fas fa-user-friends"></i>
        </div>
        <div className="header__option">
        <i class="fab fa-facebook-messenger"></i>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <img width="40" style={{borderRadius: "50%"}}src="https://cdn.discordapp.com/attachments/802185099448680538/909201325814849587/Screen_Shot_2021-11-13_at_5.00.38_PM.png"></img>
          <h4>Yefim Blokh</h4>
        </div>
        {/**
         * <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
         */}
      </div>
    </div>
  );
}

export default Header;
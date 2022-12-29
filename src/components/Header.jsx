
const Header = ({ wins }) => {
  return (
    <div>
      <div className="score">
        {wins.map((win) => (
          <p className="info-container" key={win.id}>{win.side} : {win.winsNum}</p>
        ))}
      </div>
    </div>
  )
}

export default Header
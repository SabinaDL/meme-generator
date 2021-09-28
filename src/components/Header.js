//component for the header of the page
const Header = () => {
    return (
        <header>
          <div style={headline}>MIMIMIMIMIMI</div>
          <div style={subline}>Create your own Meme</div>
        </header>
    )
}
// defining styles for the headlines
const headline = {
  display: 'inline-block',
  fontSize: '1.8rem',
  width: '50%',
  color: '#f66518'
}
const subline = {
  display: 'inline-block',
  fontSize: '1rem',
  right: '30%',
  position: 'absolute',
  bottom: 0
}
export default Header
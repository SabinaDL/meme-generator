//component for the header of the page
const Header = () => {
    return (
        <header>
          <div style={headline}>MIMIMI</div>
          <div style={headline}>Create your own Meme</div>
        </header>
    )
}

const headline = {
  display: 'inline-block',
  fontSize: '1.8rem',
  width: '50%'
}
export default Header
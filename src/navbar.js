import styled from "styled-components";

const Nav = styled.div`
  height : 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image : linear-gradient(to right, #333, #666);
  color: white;
  position : relative;
  `;

const Title = styled.div`
  font-size: 1.5rem;
  &:hover{color : pink};
`;

const Cartdiv = styled.div`
  position : realtive;
  cursor : pointer;
`;

const Image = styled.img`
  height: 30px;
  margin-right: 1px;
`;

const Span = styled.span`
  background-color : ${(props) => props.color};
  color : black;
  border-radius : 50%;
  top : -5px;
  font-size : 12px;
  postion : absolute;
  padding : 4px 8px;
  visibility : ${(props) => props.show ? "visible" : "hidden" };
`;

function Navbar(props){

    const {cartCount} = props;
    return (
      <>
        <Nav>
          <Title>MOVIE-APP</Title>
          <Cartdiv>
            <Image alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" />
            <Span color="yellow" show = {true}>{cartCount}</Span>
          </Cartdiv>
        </Nav>
      </>
    );
  }

export default Navbar;

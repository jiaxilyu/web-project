'use strict';

const b = React.createElement;
const a = React.createElement;

/*create the class name*/
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Content: false };
  }

  render() {
    /*check state to make change*/
    /*Content is an attribution of this.state*/
    if (this.state.Content) {
      /*content you want to put in the target dom*/
      return 'You submit';
    }

    return b(
      /*set up type as button*/
      'button',
      /*click function*/
      { onClick: () => this.setState({ Content: true }) },
      /*content before click*/
      'ON'
    )
  }
}
/*find dom which id is like_button_container*/

const domContainer = document.querySelector('#like_button_container');
/*the second argument is the dom you want to put*/
ReactDOM.render(b(LikeButton), domContainer);
ReactDOM.render(a(LikeButton), domContainer);

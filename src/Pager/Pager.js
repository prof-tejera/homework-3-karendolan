import { Component } from 'react';
import Button from 'components/Button/Button';
import './Pager.css';

class Pager extends Component {
  // Initialize starting current page to 1
  constructor(props) {
    super(props);
    this.state = {curPage: 1}
  }

  // onClick event
  onClick = (page) => {
    this.setState({curPage: page});
    console.log('set state to ', page);
  }

  render() {
    // Extract the props, default of 12 pages
    const {
      pageCount=12,
    } = this.props;
    // Extract the current page
    const {
      curPage
    } =  this.state;

    console.log('curPage', curPage);

    // find the starting pager number
    let startNum = 1; //default start num
    if (pageCount - curPage < 4) {
      startNum = pageCount - 4;
    } else if (curPage > 1 ) {
      startNum = curPage - 1;
    }

    // there are always 5 button elements shown unless the pageCount < 5
    const pagerButtons = Array.from({length: 4}, (v, i) => i + startNum).map((v,i) => {
      // show all 5 page butttons
      if (pageCount <= 5) {
        return (
          <Button
            key={v}
            text={v}
            color={v === curPage? 'blue' : 'neutral'}
            onClick={(() => this.onClick(v))}
          />
        )
      }
      // Special case for start of end of longer page count
      if (((pageCount - curPage < 4) && (i === 0))
          || ((pageCount - curPage >= 4) && i === 3 )) {
        return (
          <Button
            key={v}
            disabled={true}
            text='...'
            // no onClick for this item
          />
        )
      }
      // Otherwise it's a clickable page button
      return(
        <Button
          key={v}
          text={v}
          color={v === curPage? 'blue' : 'neutral'}
          onClick={(() => this.onClick(v))}
        />
      )
    });

    // Return the construct
    return (
      <div className="Pager">
        <div className="Pager-container">
          <Button
            text="<"
            disabled={(curPage <= 1)}
            onClick={(() => this.onClick(curPage > 1 ? curPage - 1 : 1))}
          />
          {pagerButtons}
          <Button
            key={pageCount}
            text={pageCount}
            color={pageCount === curPage? 'blue' : 'neutral'}
            onClick={(() => this.onClick(pageCount))}
          />
          <Button
            text=">"
            disabled={(curPage >= pageCount)}
            onClick={(() => this.onClick(curPage < pageCount ? curPage + 1: pageCount))}
          />
        </div>
        {(curPage &&
         <div>
            On page {curPage}
          </div>
        )}
      </div>
    )
  }
}

export default Pager;

import React , { Component } from "react";
import PropTypes from "prop-types";
import List , { ListItem , ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";

class TimeTablelList extends Component{
  render(){
    const { data , clickHandler }= this.props;
    return(
      <List>
        {data.map((item, index) => { return (<div key= { index } onClick= { clickHandler.bind(this , index) } >
                                              <ListItem button >
                                                <ListItemText
                                                primary= {`${item.classInfo} ${item.semester}`}
                                                secondary= {`${item.shift} shift`}
                                                >
                                              </ListItemText>
                                              </ListItem>
                                              <Divider light />
                                            </div>
                                  ); } , this)}
      </List>
    );
  }
}

TimeTablelList.propTypes= {
  data: PropTypes.array.isRequired
}

export default TimeTablelList;

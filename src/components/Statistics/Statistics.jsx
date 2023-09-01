import PropTypes from 'prop-types';
import {Item} from './Statistics.styled';
import doColor from './doColor';

export const Statistics = ({label,percentage})=>{
    return (
        <Item style={{backgroundColor: doColor()}}>
      <span>{label}</span>
      <span> {percentage} %</span>
    </Item>
    )
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
import PropTypes from 'prop-types';
import { Statistics } from '../../components/Statistics/Statistics';
import {Section, Title, List} from './Statistics.styled';

export const StatisticsList = ({title, stats})=>{
return (
    <Section>
    {title && <Title>{title}</Title>}
  
    <List >
    {stats.map(({label,percentage,id}) =>
    <Statistics label={label} 
        percentage={percentage} 
        key={id} 
    />
)}
  </List>
  </Section>
)
}

StatisticsList.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}
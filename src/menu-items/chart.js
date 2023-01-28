// assets
import { DashboardOutlined } from '@ant-design/icons';

import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
//https://mui.com/material-ui/material-icons/?query=chart&selected=StackedLineChart

// icons
const icons = {
    DashboardOutlined,
    StackedLineChartIcon
};

// ==============================|| MENU ITEMS - CHART ||============================== //

const chart = {
    id: 'group-chart',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'sensor',
            title: 'sensor',
            type: 'item',
            url: '/chart/sensor',
            icon: icons.StackedLineChartIcon,
            breadcrumbs: false
        }
    ]
};

export default chart;

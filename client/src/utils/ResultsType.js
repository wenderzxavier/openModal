import heatmap from '../assets/results/heatmap.png';
import report from '../assets/results/report.png';
import network from '../assets/results/network.png';
import location from '../assets/results/location.png';
import cluster from '../assets/results/cluster.png';
import error from '../assets/results/error.png';


const resultType = [
    {
        name: 'Transport Location',
        id: 'location.html',
        cover: location,
    },
    {
        name: 'Heatmap',
        id: 'heatmap.html',
        cover: heatmap,
    },
    {
        name: 'Report',
        id: 'report.txt',
        cover: report,
    },
    {
        name: 'Clusters',
        id: 'cluster.html',
        cover: cluster,
    },
    {
        name: 'Network',
        id: 'network.html',
        cover: network,
    },
    {
        name: 'Error',
        id: 'error.txt',
        cover: error
    }
]

export default resultType
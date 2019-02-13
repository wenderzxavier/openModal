import * as data from './Constants'
import ptsEvaluation from '../assets/funcs/ptsEvaluation.png'
import networkLoad from '../assets/funcs/networkLoad.png'

const Analyses = [
    {
        name: 'PTS Evaluation using Complex Network Metrics',
        cover: ptsEvaluation,
        data: [
            data.BUS, data.METRO, data.TRAM
        ],
        description: 'Evaluate the displacement of public transportation city using transportation data and complet network metrics.',
        detailedDescription: []
    },
    {
        name: 'Mobile Traffic Signature',
        cover: networkLoad,
        data: [
            data.MOBILE, data.GRID_ON
        ],
        description: 'Aggregate mobile traffic volume of city areas as traffic signatures used to compare different regions of a city.',
        detailedDescription: []
    },
]

export default Analyses
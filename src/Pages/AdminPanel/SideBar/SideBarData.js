import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    list:{
        width:250
    },
    fullList:{
        width:'auto'
    }
})


export const sideList = side =>(
    <div className={useStyles.fullList}
        role="presentation"
    >

    </div>
)
import React, { Component } from 'react';
import { Theme, createStyles, Button, withStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import { authStore } from '../../stores/AuthStore';

const style = (theme: Theme) => createStyles({

});

interface Props extends WithStyles<typeof style> {

}

interface State {

}

class SecretSite extends Component<Props, State> {

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '90px',
                    width: '90%',
                }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis lectus id velit placerat euismod. Aenean posuere a diam nec tincidunt. Nunc at varius libero. Donec laoreet turpis vel lacus pulvinar bibendum. Nullam non eleifend sem, eu maximus velit. Praesent tristique nisl vel suscipit ultricies. Vivamus luctus sit amet leo ac rutrum. Ut vitae rutrum turpis, quis rutrum arcu. Aliquam at sem metus. Praesent risus libero, volutpat a massa vestibulum, dapibus ultricies felis. Fusce interdum tellus eu enim tempor, non elementum neque tristique. Curabitur ultrices nibh sit amet lacus imperdiet, sed eleifend leo lobortis.

                    Curabitur egestas tortor et lectus pulvinar, ut commodo sem laoreet. Praesent vitae nibh ipsum. Quisque sit amet nisi euismod, congue arcu at, scelerisque sem. Quisque massa felis, malesuada tempor quam lobortis, ultrices placerat arcu. Fusce ultrices orci mi, a commodo massa gravida ac. Phasellus odio ante, blandit placerat neque faucibus, semper porta justo. Nulla justo tortor, consectetur dictum commodo in, fermentum id turpis. Suspendisse a blandit justo. Curabitur ultricies quam diam, non scelerisque lectus aliquet eu. Aliquam ac elit laoreet, pharetra metus eu, ornare ante.

                    In hac habitasse platea dictumst. Cras scelerisque ultrices volutpat. Donec sagittis mollis leo nec tincidunt. Praesent laoreet convallis augue, vulputate sollicitudin mauris maximus ut. Sed porttitor ultricies ante, vel finibus augue condimentum quis. Proin eget turpis in massa ultrices accumsan vel commodo odio. Sed vel sodales arcu.

                    Cras cursus tellus sit amet leo sollicitudin volutpat. Praesent posuere lacus commodo mi aliquam euismod. Phasellus malesuada elit nec lorem fermentum congue. Mauris in ante ut leo imperdiet pretium. Pellentesque hendrerit, ipsum non iaculis blandit, mauris tortor mattis diam, sed efficitur augue massa eget urna. Phasellus mattis suscipit turpis sed finibus. Duis laoreet vestibulum justo sed dapibus. Nullam eu semper elit. Aenean sed sem quis purus sollicitudin feugiat. Integer viverra justo eu consectetur viverra. Suspendisse pellentesque vel mauris a convallis. Curabitur at suscipit sem, nec ullamcorper nisl. Pellentesque sed nibh risus. Vivamus vitae egestas felis. Donec pellentesque libero eget urna tempus, a dictum sapien blandit.

                    Sed tristique blandit tempor. Nam ornare nibh purus, nec consectetur est scelerisque a. In commodo blandit pellentesque. Nullam tristique egestas enim id congue. Phasellus a justo mattis, sodales justo et, aliquet tellus. Duis et sapien nibh. Cras eleifend augue vel nibh sollicitudin interdum. Nullam ultrices lacus eu dui volutpat rhoncus.</p>
                </div>
            </div >
        );
    }

}
export default withStyles(style)(SecretSite);
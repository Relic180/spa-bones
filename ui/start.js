import './styles/start.scss';
import './styles/icons.scss'; // Importing from a single point here because url paths to font files are tricky with webpack

import Utilities from '../libs/_utilities.js';
import Comms from './comms.js';
window.util = new Utilities;
window.Comms = new Comms;

// Define ClassTree
import Model from './model/base.js';
import User from './model/user.js';
import AuthUser from './model/authuser.js';
import View from './view/base.js';
import Page from './view/page/base.js';
import Collection from './collection/base.js';
import CollectionView from './collection/view/base.js';

window.Class = {
    View: {
        Base: View,
        Page: {
            Base: Page
        },
        List: {
            Simple: '_component_list_t1',
            //Column: '_component_list_t2', // TODO: Has not yet been built yet
            Row: {
                User: '_component_list_t1' // Available views should mirror available models
            }
            // Card: {
            //     User: '_component_list_t2'
            // }
        },
        Screentip: {
            Coordinator: '_component_core',
            Base: '_component_core',
            Simple: '_component_core',
            Custom: '_component_screentip_custom',

            Contextmenu: '_component_screentips_t1',
            Formflag: '_component_screentips_t1'
        },
        Modal: {
            Coordinator: '_component_core',
            Base: '_component_core',
            Custom: '_component_modal_custom',

            Prompt: '_component_modal_prompt'
        },
        Messenger: {
            Coordinator: '_component_core',
            Base: '_component_core',
            Simple: '_component_core'
            // Custom: '_component_modal_custom' // TODO: Build this
        },
        Input: {
            Text: '_component_core',
            Slider: '_component_input_t1',
            Toggle: '_component_input_t1',
            Select: '_component_input_t1',
            Check: '_component_input_t1'
        }
    },
    Model: {
        Base: Model,
        User: User,
        AuthUser: AuthUser
    },
    Collection: {
        Base: Collection,
        View: {
            Base: CollectionView
        }
    }
};

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
//import CollectionView from './collection/view/base.js'; // TODO: This is throwing an error on load

window.Class = { // ClassTree values are equal to a class definition OR a string representing the bundle filename where the class is found.
    View: {
        Base: View,
        Page: {
            Base: Page,
            Home: '_page_home'
        },
        List: {
            Simple: '_component_list_core',
            Row: {
                User: '_component_list_core' // Available views should mirror available models
            }
        },
        Screentip: {
            Coordinator: '_component_core',
            Base: '_component_core',
            Simple: '_component_core',
            Custom: '_component_screentip_t1',
            Contextmenu: '_component_screentip_t1',
            Formflag: '_component_screentip_t1'
        },
        Modal: {
            Coordinator: '_component_core',
            Base: '_component_core',
            Custom: '_component_modal_t1',
            Prompt: '_component_modal_t1'
        },
        Messenger: {
            Coordinator: '_component_core',
            Base: '_component_core',
            Simple: '_component_core'
        },
        Input: {
            Text: '_component_core',
            Select: '_component_input_t1',
            Slider: '_component_input_t1',
            Toggle: '_component_input_t1',
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
            //Base: CollectionView
        }
    }
};

// Fetch and init the application core
import Bones from './Bones.js';
window.Bones = new Bones();

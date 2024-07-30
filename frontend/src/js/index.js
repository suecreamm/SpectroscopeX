import { initializeFileUploadHandler } from '../components/FileUploadHandler.js';
import { initializeTabs } from '../components/Tab.js';
import { initializeViewToggle } from '../components/ViewToggle.js';

document.addEventListener('DOMContentLoaded', function() {
    initializeFileUploadHandler();
    initializeTabs();
    initializeViewToggle();
});
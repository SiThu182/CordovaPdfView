/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // this.receivedEvent('deviceready');

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // const documentPath =  "https://demo.aggademo.me/MAC/public/storage/article/contract_CIIPass_QTPass.pdf";
    // cordova.plugins.fileOpener2.open(
    //     documentPath,
    //     'application/pdf',
    //     {   error: function(e) {
    //             console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
    //         },
    //         success: function() {
    //             console.log('file opened successfully');
    //         }
    //     }
    // );
     
    // document.getElementById('deviceready').classList.add('ready');
    const documentPath = cordova.file.applicationDirectory + "www/Document.pdf"

    PSPDFKit.present(documentPath);

}

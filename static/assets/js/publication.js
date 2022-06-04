/*Publication Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Task and Billing Automation System",
        researchlink: "https://ieeexplore.ieee.org/document/9079938",
        authors : "Mustafa Ali, Ahmed Ali, Komal Ata, M Imad, M Naseem",
        conferences : "2020 International Conference on Information Science and Communication Technology (ICISCT)",
        researchYr : 2020,
        citebox : "popup1",
        image : "../static/assets/images/research-page/TBAS.png",
        citation: {
            vancouver: "Mustafa Ali, Ahmed Ali, Komal Ata, M Imad, M Naseem. Task and Billing Automation System. 2020 International Conference on Information Science and Communication Technology (ICISCT)."
        },
        abstract: "Salesforce is the new way of creating and accessing the cloud-based application in the market. Salesforce provides Cloud based services to their customer's. Salesforce (CRM) is the best customer relation management platform. Salesforce CRM is an on-demand network model that conFigure the sources to their customers. Salesforce CRM provides these facilities to their customers like availability, scalability, Security and performance etc. Salesforce helps organization to up to date data and better performance. It also provides B2B and B2C deliveries. It automates the manual business workflow and rules and also provides security to their customers data. Also provides facility to control subsystems of sales processes and managing business flows. It also integrates with other tools to provide facility to their customer like smart supp chat box integration. Due to chat box feature you can easily collaborate with your other team members. Employee can easily Schedule their task according to their priority. Customer can control and manage their business in a whole new way. In addition, this is a great advantage of accessing salesforce CRM from any browser at any location. Companies which have large business and have moderate growth should have to use Salesforce CRM Platform to automate their business process and for fast growth.",
        absbox: "absPopup1"
    },

    {
        title : "Invisibility Cloak using Color Extraction and Image Segmentation with OpenCV",
        authors : "Mustafa Ali, Farheen Qazi, Dr. Muhammad Naseem, Dr. Syed Saood Zia, Dur-e-Shawar Agha, Tauseef Mubeen",
        conferences : "2022 Global Conference on Wireless and Optical Technologies (GWOIT)",
        researchYr : 2022,
        citebox : "popup2",
        image : "../static/assets/images/research-page/cloak.png",
        citation: {
            vancouver: "Mustafa Ali, Farheen Qazi, Dr. Muhammad Naseem, Dr. Syed Saood Zia, Dur-e-Shawar Agha, Tauseef Mubeen. Invisibility Cloak using Color Extraction and Image Segmentation with OpenCV. 2022 Global Conference on Wireless and Optical Technologies (GWOIT)"
        },
        abstract: "In the past decade, people's interest in computer vision has grown. Stable multiplication rate boost with powerful computing power every 13 months, face detection and recognition has changed from esoteric concept to popular One of the better and successful applications of computer vision research and image analysis and image analysis Algorithm-based understanding. In our work, we will be detecting contours (shapes) of various geometrical figures in the sample given binary mask extracted from HSV (Hue Saturation Value) range using Python 3.6, Open-Source Computer Vision Library (OpenCV 3x) and Numpy. The very fundamental functions are used for processing the frames, that involves getting live video feed, loading them frame-by-frame, and detecting various shape of red colors inside the live feed frames and segment them with previously saved image with the exact same location. In this paper we discuss three primary problems of computer vision: Finding contours, detection of specified color and segment with another image. We tried state-of-the-art algorithms for these three tasks. HSV color extraction is used to get the mask of desire colored object. In order to get high quality image segmentations results, we applied Morphological operations to refine the mask such as, Opening which removes unnecessary details which in our case are the white region on the boundary of the cloth that is not required, Erosion, Dilatation operation and Gaussian Blurring to smoothen the result. We link this contour detector with Convex Hull, this strategy performs better than our existing image segmentation algorithms on measures of both boundary and segmentation quality. Finally, we replaced pixel value of red color region detected by HSV mask with the pixel value of our background image with the help of bitwise operation to get the augmented result of invisible cloak.",
        absbox: "absPopup2"
    },

    // {
    //     title : "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
    //     authors : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "popup3",
    //     image : "../static/assets/images/research-page/wordRepresentation.png",
    //     citation: {
    //         vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 3",
    //     absbox: "absPopup3"
    // },

    // {
    //     title : "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
    //     authors : "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
    //     conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
    //     researchYr : 2020,
    //     citebox : "popup4",
    //     image : "../static/assets/images/research-page/dialogueState.png",
    //     citation: {
    //         vancouver: "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 4",
    //     absbox: "absPopup4"
    // },

    // {
    //     title : "Dual Super-Resolution Learning for Semantic Segmentation",
    //     authors : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "popup5",
    //     image : "../static/assets/images/research-page/semanticSegmentation.png",
    //     citation: {
    //         vancouver: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 5",
    //     absbox: "absPopup5"
    // },

    // {
    //     title : "Deep Unfolding Network for Image Super-Resolution",
    //     authors : "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "popup6",
    //     image : "../static/assets/images/research-page/deepNetwork.png",
    //     citation: {
    //         vancouver: "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 6",
    //     absbox: "absPopup6"
    // },

    // {
    //     title : "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    //     authors : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "popup7",
    //     image : "../static/assets/images/research-page/imageDecomposition.png",
    //     citation: {
    //         vancouver: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 7",
    //     absbox: "absPopup7"
    // },
    // {
    //     title : "Forward and Backward Information Retention for Accurate Binary Neural Networks",
    //     authors : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    //     conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    //     researchYr : 2020,
    //     citebox : "popup8",
    //     image : "../static/assets/images/research-page/neuralNetworks.jpg",
    //     citation: {
    //         vancouver: "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
    //     },
    //     abstract: "This is currently left empty and this can be considered as a dummy data 8",
    //     absbox: "absPopup8"
    // }
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, researchlink, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${researchlink}" target="_blank" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            BIBTEX
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);


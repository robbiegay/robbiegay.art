import React from 'react';

function PageFormat(props) {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div className="col-0 col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <article className="text-justify">
                            {props.children}
                        </article>
                    </div>
                    <div className="col-0 col-sm-1 col-md-2 col-lg-3"></div>
                </div>
            </div >
        </>
    );
}

export default PageFormat;

import React from 'react';
 
const Blogs = () => {
    return (
        <div style={{marginTop:'100px'}} className='container my-100px ' >
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Q1 : What is the Context API?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style={{textAlign:'left'}} class="accordion-body">
      The Context API is a component structure provided by the React framework,which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.
        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Q2 : What is Semantic tag? and explain example?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={{textAlign:'left'}}  class="accordion-body">
                            Semantic Elements: Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.
                            <small>Example: list of sementic tag: <br />1) article tag,<br />2) main tag, <br />3) footer tag,<br />4) section tag, <br />5)nav tag, <br />6) header tag.</small>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Q3 : Inline,Block,Inline-block elements difference?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div style={{textAlign:'left'}}  class="accordion-body">
                            <h6>i. Inline element:</h6>
                            When coding html that provides output on the same line, they are called inline elements. Like-button,br,img,strong etc. <br /><br />

                            <h6>ii.Block element: </h6>
                            When coding html on the next line, which provides a fragmented output, they are called inline-block elements.Like- p,hr,main etc. <br /><br />

                            <h6>iii.Inline-block element:</h6>
                            When coding html that provides output on the same line, they are called inline elements. <br /><br />

                            

      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;
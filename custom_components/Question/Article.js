import style from './Article.module.css'
const Article = () => {

    return (
        <div className={style.container}>
            <h1 style={{color: "black"}}>Hello, world!</h1>
          <div className={style.blurBackground}>
            <h1>Hello, world!</h1>
            <p>This is a slightly transparent component with a blurred background.</p>
          </div>
        </div>
      );
    };

export default Article;

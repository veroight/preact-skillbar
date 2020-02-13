import style from './style.module.css';

function SkillBar(props) {
  // const barColor = props.color || randomColor();

  return (
    <div class={style.barBox}>
      <div
        class={style.barDescription}
        style={{ width: props.percentage + '%' }}
      >
        <span>{props.skill}</span>
        <span>{props.percentage}%</span>
      </div>
      <div class={style.skillBox}>
        <div
          class={[style.bar, style.animate].join(' ')}
          style={{
            width: props.percentage + '%'
            // backgroundColor: barColor
          }}
        />
      </div>
    </div>
  );
}

export default SkillBar;

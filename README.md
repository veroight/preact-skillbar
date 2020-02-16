# Skill Bars for Preact

![example](/example.png)

# Installation

Via npm:

`npm install --save preact-skillbar`

# Usage

```js
import SkillBar from 'preact-skillbar';
import 'preact-skillbar/dist/index.css';

function Skills() {
  return (
    <div>
      <SkillBar percentage={70} skill="React" />

      <SkillBar percentage={30} barColor="red" skill="VueJs" />

      <SkillBar percentage={30} barColor="#000000" skill="VueJs" />
    </div>
  );
}

export default Skills;
```

## Props

| Prop             | Type   | Description      |
| ---------------- | ------ | ---------------- |
| **`percentage`** | Number | 0...100          |
| **`barColor`**   | String | Default: #d23669 |
| **`skill`**      | String | skill name       |

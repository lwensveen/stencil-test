import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'lw-tool-bar',
  styleUrl: 'tool-bar.css',
  shadow: true
})
export class ToolBar {
  @Prop() text: string;
  @Prop() mobile: boolean;

  handleClick(event: UIEvent) {
    this.text = this.text.split('').reverse().join('');
  }

  render() {
    return (
      <Host class={this.mobile === true ? 'mobile' : ''}>
        <h1 onClick={(event: UIEvent) => this.handleClick(event)}>{this.text}</h1>
      </Host>
    );
  }

}

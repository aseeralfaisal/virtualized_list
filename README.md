# virtualized_list
A technique that improves the performance of large lists of data in React applications.

<p>Virtualized lists are a performance optimization technique used in applications to efficiently render large lists of data. This technique ensures that only a small subset of the list's elements is rendered at any given time, significantly reducing the DOM nodes and improving rendering performance.</p>
<p>Recently, I encountered a scenario in a vanilla JavaScript project where I needed to display a list of 2000 fonts in a small scrolling menu. When I tried rendering all the list items at once, the application's performance noticeably slowed down. This experience highlighted the importance of virtualized lists or windowing. The implementations can differ and vary but the idea is the same where certain length of items are rendered in a container and renders more if scrolled up and down.</p>
<img src="https://github.com/aseeralfaisal/virtualized_list/assets/67814164/e95fd0fc-1310-4aab-8650-c4233c2e5792" />

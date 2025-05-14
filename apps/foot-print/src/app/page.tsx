import { Test } from '@common/ui/components/Test';
import { Test2 } from '@common/ui/components/Test2';

export default function HomePage() {
  return (
    <section>
      <Test2 />
      <Test />
      <div className="m-12">이건 오리지날 폰트 사이즈</div>
    </section>
  );
}

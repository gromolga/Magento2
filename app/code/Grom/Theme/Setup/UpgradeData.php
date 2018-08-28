<?php
/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */
namespace Grom\Theme\Setup;

class UpgradeData implements \Magento\Framework\Setup\UpgradeDataInterface
{

    /**
     * @var \Magento\Cms\Model\BlockFactory
     */
    private $blockFactory;

    public function __construct(
        \Magento\Cms\Model\BlockFactory $blockFactory
    ) {
        $this->blockFactory = $blockFactory;
    }

    /**
     * Upgrades data for a module
     *
     * @param \Magento\Framework\Setup\ModuleDataSetupInterface $setup
     * @param \Magento\Framework\Setup\ModuleContextInterface $context
     * @return void
     */
    public function upgrade(
        \Magento\Framework\Setup\ModuleDataSetupInterface $setup,
        \Magento\Framework\Setup\ModuleContextInterface $context
    ) {
        if (version_compare($context->getVersion(), '0.2.0', '<')) {
            $cmsBlockData = [
                'title' => 'Features list',
                'identifier' => 'features-list',
                'content' => "<h1>Hello</h1>",
                'is_active' => 1,
                'stores' => [0],
                'sort_order' => 0
            ];
            /** @var \Magento\Cms\Model\Block $existingBlock */
            $existingBlock = $this->blockFactory->create();
            $existingBlock->load($cmsBlockData['identifier'], 'identifier');
            if (!$existingBlock->getId()) {
                $this->blockFactory->create()->setData($cmsBlockData)->save();
            }

        }

    }


}

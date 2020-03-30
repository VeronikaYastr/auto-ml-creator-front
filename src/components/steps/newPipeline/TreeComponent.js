import React from 'react';
import Tree from '@mui-treasury/components/chart/tree';
import Box from '@material-ui/core/Box';
import TreeNodeCard from "../../cards/TreeNodeCard";

const Dot = () => (
    <Box
        zIndex={1}
        height={32}
        width={32}
        bgcolor="#B574BF"
        border={`1px solid #760B87`}
        boxShadow={'0 1px 4px 0 rgba(0,0,0,0.12)'}
        css={{transform: 'rotateZ(45deg)'}}
    />
);

const TreeComponent = () => {
    return (
        <Tree length={24} gutter={16} outline={`1px solid #760B87`}>
            <Tree.Trunk>
                <Dot/>
                <Tree.Branches>
                    <Tree.Stem>
                        <TreeNodeCard card={{"title": "Normalizer", "type": "normalization"}}/>
                        <Tree.Branches>
                            <Tree.Stem>
                                <TreeNodeCard card={{"title": "StandardScaler", "type": "text transform"}}/>
                            </Tree.Stem>
                        </Tree.Branches>
                    </Tree.Stem>
                    {/*  <Tree.Twig>
                        <Tree.Stem>
                            <Typography variant="h4" color="inherit">
                                Projects
                            </Typography>
                        </Tree.Stem>
                        <Tree.Branches>
                            <Tree.Twig>
                                <Tree.Stem>
                                    <Dot />
                                </Tree.Stem>
                            </Tree.Twig>
                            <Tree.Twig>
                                <Tree.Stem>
                                    <Dot />
                                </Tree.Stem>
                                <Tree.Branches>
                                    <Tree.Twig>
                                        <Tree.Stem>
                                            <Dot />
                                        </Tree.Stem>
                                    </Tree.Twig>
                                    <Tree.Twig>
                                        <Tree.Stem>
                                            <Dot />
                                        </Tree.Stem>
                                    </Tree.Twig>
                                    <Tree.Twig>
                                        <Tree.Stem>
                                            <Dot />
                                        </Tree.Stem>
                                    </Tree.Twig>
                                    <Tree.Twig>
                                        <Tree.Stem>
                                            <Dot />
                                        </Tree.Stem>
                                    </Tree.Twig>
                                </Tree.Branches>
                            </Tree.Twig>
                        </Tree.Branches>
                    </Tree.Twig>
                    <Tree.Twig>
                        <Tree.Stem>
                            <Dot />
                        </Tree.Stem>
                        <Tree.Branches>
                            <Tree.Twig>
                                <Tree.Stem>
                                    <Dot />
                                </Tree.Stem>
                            </Tree.Twig>
                            <Tree.Twig>
                                <Tree.Stem>
                                    <Dot />
                                </Tree.Stem>
                            </Tree.Twig>
                            <Tree.Twig>
                                <Tree.Stem>
                                    <Dot />
                                </Tree.Stem>
                            </Tree.Twig>
                        </Tree.Branches>
                    </Tree.Twig>*/}
                </Tree.Branches>
            </Tree.Trunk>
        </Tree>
    );
};

export default TreeComponent;